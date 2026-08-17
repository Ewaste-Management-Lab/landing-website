export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export interface ContactSubmissionResult {
  success: boolean;
  error?: string;
}
