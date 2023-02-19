class Base64ts {
    private static _instance: Base64ts;

    private constructor() {}

    public static get instance(): Base64ts {
        if (!Base64ts._instance) {
            Base64ts._instance = new Base64ts();
        }
        return Base64ts._instance;
    }

    public encode(str: string): string {
        return Buffer.from(str).toString('base64');
    }

    public decode(str: string): string {
        return Buffer.from(str, 'base64').toString();
    }
}

const Base64 = Base64ts.instance;
export { Base64 };
