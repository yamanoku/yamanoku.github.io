export class SiteCliError extends Error {
  readonly exitCode: number;
  readonly reason: string;
  readonly next: string[];
  readonly issues: string[];
  readonly silent: boolean;

  constructor(options: {
    message: string;
    exitCode: number;
    reason: string;
    next?: string[];
    issues?: string[];
    silent?: boolean;
  }) {
    super(options.message);
    this.name = "SiteCliError";
    this.exitCode = options.exitCode;
    this.reason = options.reason;
    this.next = options.next ?? [];
    this.issues = options.issues ?? [];
    this.silent = options.silent ?? false;
  }
}

export class RenderedCliError extends Error {
  readonly exitCode: number;

  constructor(message: string, exitCode: number) {
    super(message);
    this.name = "RenderedCliError";
    this.exitCode = exitCode;
  }
}
