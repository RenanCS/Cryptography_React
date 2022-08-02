import { ICryptography } from "../interface/ICryptography";
import * as forge from 'node-forge';

export class Aes implements ICryptography {
    encrypt(data: any): any {
        if (!data) {
            return "";
        }
        const dataJson = JSON.stringify(data);

        const sessionKey = forge.random.getBytesSync(16);
        const iv = forge.random.getBytesSync(12);

        const cipher = forge.cipher.createCipher('AES-GCM', sessionKey);

        cipher.start({
            iv: iv,
            tagLength: 128,
        });

        cipher.update(forge.util.createBuffer(dataJson));

        cipher.finish();

        const encrypted = cipher.output;
        const encryptedData = encrypted.data;
        const tag = cipher.mode.tag.data;

        return {
            "EncryptedSessionKey": window.btoa(sessionKey),
            "EncryptedData": window.btoa(encryptedData),
            "Tag": window.btoa(tag),
            "Iv": window.btoa(iv)
        }
    }

    decrypt(data: any): string {

        if (!data) {
            return "";
        }
        const encryptedSessionKey = forge.util.decode64(data.EncryptedSessionKey);
        const iv = forge.util.createBuffer(forge.util.decode64(data.Iv));
        const tag = forge.util.createBuffer(window.atob(data.Tag));
        const encryptedData = forge.util.createBuffer(forge.util.decode64(data.EncryptedData));

        var decipher = forge.cipher.createDecipher('AES-GCM', encryptedSessionKey);
        decipher.start({ iv: iv, tag: tag });
        decipher.update(encryptedData);
        var pass = decipher.finish();

        if (pass) {
            return decipher.output.data;
        }

        return "";
    }
}