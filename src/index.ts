type StringEntriesHash = {
  [value: string]: string,
};

class Tag {
  protected singleTagsList = ['img', 'br', 'hr', 'input', 'meta', 'link', 'script', 'base', 'area', 'embed', 'param'];

  constructor(
    protected name: string,
    protected properties?: StringEntriesHash,
    protected tagText?: string,
  ) {}

  toString(): string {
    if (this.singleTagsList.includes(this.name)) {
      return `<${this.name} ${this.propertiesToString()}>`;
    }

    return `<${this.name} ${this.propertiesToString()}>${this.tagText}</${this.name}>`;
  }

  propertiesToString(): string {
    if (!this.properties) return '';

    return Object.entries(this.properties).reduce((acc, [key, value]) => `${key}="${value}" ${acc}`, '');
  }
}

export default class HexletCode {
    static formFor = (template: StringEntriesHash, params: StringEntriesHash, fn: (val: HexletCode) => void) => {
        
    }
}
