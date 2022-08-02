import { ICryptography } from "../interface/ICryptography";
import { PubPriKey } from "../typecrypt/PubPriKey";
import { FactoryCrypt } from "./FactoryCrypt";

export class FactoryPubPriKey extends FactoryCrypt {
    private static instance: ICryptography | null = null;

    getTypeCrypt(): ICryptography {
        if (FactoryPubPriKey.instance === null) {
            FactoryPubPriKey.instance = new PubPriKey();
        }

        return FactoryPubPriKey.instance;
    }
}