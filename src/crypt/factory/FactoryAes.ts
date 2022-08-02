import { ICryptography } from "../interface/ICryptography";
import { Aes } from "../typecrypt/Aes";
import { FactoryCrypt } from "./FactoryCrypt";

export class FactoryAes extends FactoryCrypt {
    private static instance: ICryptography | null = null;

    getTypeCrypt(): ICryptography {
        if (FactoryAes.instance === null) {
            FactoryAes.instance = new Aes();
        }

        return FactoryAes.instance;
    }
}