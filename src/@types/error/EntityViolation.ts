export interface EntityViolation {
    Error: boolean;
    Message: string;
    Status: string;
    Violations: { [key: string]: string };
}
