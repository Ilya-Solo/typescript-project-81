type TagProperties = {
    [value: string]: string,
} | {};

class Tag {
    protected singleTagsList = ["img", "br", "hr", "input", "meta", "link", "script", "base", "area", "embed", "param"];

    constructor(protected name: string, protected properties?: TagProperties, protected tagText?: string) {}

    // toString(): string {

    // }
}