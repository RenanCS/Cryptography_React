import { ICryptography } from "../interface/ICryptography";

export abstract class FactoryCrypt {
    abstract getTypeCrypt(): ICryptography

    encrypt(data: any): ICryptography {
        var type = this.getTypeCrypt();
        return type.encrypt(data);
    }

    decrypt(data: any): ICryptography {
        var type = this.getTypeCrypt();
        return type.decrypt(data);
    }
}