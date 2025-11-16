export function buildUrl(...segments: string[]): string {
    const slash = '/';
    return slash + segments.join(slash);
}
