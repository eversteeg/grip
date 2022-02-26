/* eslint-disable react/jsx-props-no-spreading */
import { ContentWrapper, OverlayWrapper, StyledPageLayout } from './PageLayout.sc';
import { Dialog, Modal, Overlay, SidePanel } from 'faralley-ui-kit';
import React, { FunctionComponent, ReactNode, useCallback, useEffect, useState } from 'react';
import { setIsResetScrollingRequired, setIsSidebarVisible } from '../../../state/global/actions';
import { shallowEqual, useDispatch } from 'react-redux';
import { closeModal } from '../../../state/modal/actions';
import { closeSidePanel } from '../../../state/sidepanel/actions';
import Content from '../../atoms/content/Content';
import { ContentWidth } from '../../../../@types/Route';
import { DialogFileUpload } from '../../molecules/dialogs/dialogFileUpload/DialogFileUpload';
import Header from './header/Header';
import Sidebar from '../../organisms/sidebar/Sidebar';
import useSelector from '../../../state/useSelector';

interface PageLayoutProps {
    children: ReactNode;
    contentWidth?: ContentWidth;
}

const PageLayout: FunctionComponent<PageLayoutProps> = ({ children, contentWidth = ContentWidth.DEFAULT }) => {
    const dispatch = useDispatch();
    const calculatedMessageBarHeight = useSelector(({ global }) => global.calculatedMessageBarHeight);
    const dialogProps = useSelector(({ dialog }) => dialog.dialogProps, shallowEqual);
    const dialogFileUploadProps = useSelector(({ dialog }) => dialog.dialogFileUploadProps);
    const isDialogFileUploadVisible = useSelector(({ dialog }) => dialog.dialogFileUploadProps.isVisible);
    const isDialogVisible = useSelector(({ dialog }) => dialog.dialogProps.isVisible);
    const isModalVisible = useSelector(({ modal }) => modal.modalProps.isVisible);
    const isSidebarVisible = useSelector(({ global }) => global.isSidebarVisible);
    const isSidePanelVisible = useSelector(({ sidePanel }) => sidePanel.sidePanelProps.isVisible);
    const modalProps = useSelector(({ modal }) => modal.modalProps, shallowEqual);
    const modalChildren = useSelector(({ modal }) => modal.modalChildren);
    const sidePanelProps = useSelector(({ sidePanel }) => sidePanel.sidePanelProps, shallowEqual);
    const sidePanelChildren = useSelector(({ sidePanel }) => sidePanel.sidePanelChildren);
    const isResetScrollingRequired = useSelector(({ global }) => global.isResetScrollingRequired);
    const [scrollTo, setScrolledTo] = useState(0);
    const [hasScrollBar, setHasScrollBar] = useState(false);

    const closeAllCallback = useCallback(() => {
        if (isModalVisible || isSidePanelVisible) {
            if (isModalVisible) {
                dispatch(closeModal());
            }

            if (isSidePanelVisible) {
                dispatch(closeSidePanel());
            }
        } else {
            dispatch(setIsSidebarVisible(false));
        }
    }, [isModalVisible, isSidePanelVisible]);

    const setSidebarIsVisibleCallback = useCallback(() => {
        dispatch(setIsSidebarVisible(!isSidebarVisible));
    }, [isSidebarVisible]);

    const onScrollCallback = useCallback(() => {
        // prevent reset the scrollTop when this call back is called when adding and removing EventListner before we even scrolled and before the scroll position is set after the modal/dialog is closed
        if (document.documentElement.scrollTop > 0) {
            setScrolledTo(document.documentElement.scrollTop);
        }
    }, []);

    // when dialog is closed scroll to last scrolled position
    useEffect(() => {
        if (!isDialogVisible && !isModalVisible && !isDialogFileUploadVisible) {
            window.scrollTo(0, scrollTo);
        }
    }, [isDialogVisible, isModalVisible, isDialogFileUploadVisible]);

    // if scrolledPosition is reset (happens when switching tabs or going to another menu item)
    useEffect(() => {
        if (isResetScrollingRequired) {
            setScrolledTo(0);
            setHasScrollBar(false);
            dispatch(setIsResetScrollingRequired(false));
        }
    }, [isResetScrollingRequired]);

    useEffect(() => {
        if (!hasScrollBar && scrollTo !== 0) {
            setHasScrollBar(true);
        }
    }, [scrollTo]);

    // listen to scroll, remove event listener when dialog is open
    useEffect(() => {
        if (isDialogVisible || isModalVisible || isDialogFileUploadVisible) {
            window.removeEventListener('scroll', onScrollCallback);
        } else {
            window.addEventListener('scroll', onScrollCallback);
        }
    }, [onScrollCallback, isDialogVisible, isModalVisible, isDialogFileUploadVisible]);

    return (
        <>
            <StyledPageLayout
                blockScrolling={isDialogVisible || isModalVisible || isDialogFileUploadVisible}
                hasRightCorrection={(isDialogVisible || isModalVisible || isDialogFileUploadVisible) && hasScrollBar}
                top={isDialogVisible || isModalVisible || isDialogFileUploadVisible ? scrollTo : 0}
            >
                <Header isSidebarVisible={isSidebarVisible} onClickButtonMenu={setSidebarIsVisibleCallback} />
                <Sidebar />

                <ContentWrapper isSidebarVisible={isSidebarVisible} topCorrection={calculatedMessageBarHeight}>
                    <Content contentWidth={contentWidth} id="content">
                        {children}
                    </Content>
                </ContentWrapper>
                <Modal {...modalProps}>{modalChildren}</Modal>
                <SidePanel {...sidePanelProps}>{sidePanelChildren}</SidePanel>
                <OverlayWrapper isSidePanelType={isSidePanelVisible}>
                    <Overlay isVisible={isSidePanelVisible || isSidebarVisible} onClick={closeAllCallback} />
                </OverlayWrapper>
            </StyledPageLayout>
            {isDialogVisible && <Dialog {...dialogProps} hasButtonClose={false} />}
            {isDialogFileUploadVisible && <DialogFileUpload {...dialogFileUploadProps} />}
        </>
    );
};

export default PageLayout;
