export interface Task {
    id?: number; // question mark allows for optional
    text: string;
    day: string;
    reminder: boolean;
}