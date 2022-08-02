import { ICryptography } from "../interface/ICryptography";
import * as forge from 'node-forge';

export class PubPriKey implements ICryptography {

    private readonly PUBLICKEY: string = `-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7S/oA3VXVYubtq6NIbEQ
    kDL5s2g62VQnLdsQrwFW1QzyGVydYY04egA3pNYAlQptENWaybpKWvLPrZ5M2A6Q
    iPf//ckgSyT4wNbmkbIy2+WbcI9rRJ2IjWJ5o9y72YcagxGM9A/5LP1Riutupjuk
    mRKh/r8w0yl8CAFolRAuoBbRiKsWb1UUMJEYCRdrCJ1KYFEoCpUuXYKapcbcgewK
    p/Bz1kiJnCEjCybFE5rn1DeSAAJJe5G/gDuhaLT0fUwHibC3zg1NrG7Xh5hMX28d
    GxLhfcGG630PqnvdMnYK3TLa3dgoqJ7ho0R8K5QENE7w42ZRGGQdc6KvGeK8dUN/
    iQIDAQAB
    -----END PUBLIC KEY-----`;

    private readonly PRIVATEKEY: string = `-----BEGIN RSA PRIVATE KEY-----
    MIIEpQIBAAKCAQEA7S/oA3VXVYubtq6NIbEQkDL5s2g62VQnLdsQrwFW1QzyGVyd
    YY04egA3pNYAlQptENWaybpKWvLPrZ5M2A6QiPf//ckgSyT4wNbmkbIy2+WbcI9r
    RJ2IjWJ5o9y72YcagxGM9A/5LP1RiutupjukmRKh/r8w0yl8CAFolRAuoBbRiKsW
    b1UUMJEYCRdrCJ1KYFEoCpUuXYKapcbcgewKp/Bz1kiJnCEjCybFE5rn1DeSAAJJ
    e5G/gDuhaLT0fUwHibC3zg1NrG7Xh5hMX28dGxLhfcGG630PqnvdMnYK3TLa3dgo
    qJ7ho0R8K5QENE7w42ZRGGQdc6KvGeK8dUN/iQIDAQABAoIBAQC2I97AoSBy4eWu
    0LYyVD3K7kpQWk8uy2/Wx+405gtfSjS0AyocWo0vKvGQFIKX8Uy168KU/QjSdLnE
    staB6BVYCVI8+nFhI0AfHigrZDOoJ9dJBemy5GKTaDbO/dgHgLd8RUL/vTB1Owae
    bpMm9pA8uFFMRlfhIG9N2n8MUUPszH6fkPWzIWV/DouoHZCOWzTTOhKMqVACRU7M
    ARErffiaAWg67Y/A7V4Ac2v/GJXRQ4txrX2OWRfbBRA4MpY4kDPWUwz9xm4KbjJJ
    SgZJtpfAXfCniwUAKVLVB+X8zBhrRzI0+gWZwvasMcBp83YCq2x4Zywz8EJuvi+e
    WJUOLTVdAoGBAPeeQwxTi3CnXD8eRNQvWrLFyXBlYEyWKcebsc5x4t7XW4vuTRto
    ZErBYntbrlePOiFeTNW5woq3DttDDxjqOYH9dCWikmn+FQH07OWENtMbtLMaQdo2
    MCbWoDMPwDOmjUCP6KkoBJ7XY0MrJ5xslKKLverLwCSJ4mv/kufBik4DAoGBAPU3
    QPjWsGFHahd0jhFKtKVgVVbpjCq4L9hmMtY87O8pIvTvypWOQBkjzBa3W0LvyQ7r
    Y/TZV6ghy97bacAxHW+OH9WcUmzkLCQ/OFjdMwBnI4lBbz3h9IhZzaPvuHGo99PL
    NywZ9Fwpw3EcHcPDTiAySuB/VSGTkDifFGKg0dyDAoGBAILrABQST9UeB12vyUBO
    USvX+uscDlAvzKMmpFm8SPD8+AAB3G6zQONtX35NON4+ccOWshUGA9+HbalryR2p
    KQKbWL9VNwgnOEAymNW4k6wGKAHRziNrJwZBz61vlHU6h9Asxhw5dkftJSQsOuMv
    XV6bd6weUdZ/uGDVXXx/DXq1AoGBAKqyhOrz4CJHqUWcoEzPOUMp9R4kQ6t1PfEg
    62CRVsoBU9E3n0lOlbYqYiaqCsBk1QwqthE6vrdOl3GSQWJFjl0ajXSQdhxRFZ1B
    2QKbMKamJWmlgD+OrD/Ca9EjzbxpR+NKQiTUCHOjquZxERM2QItPFyqB2QwfgbS4
    oGMr2grrAoGAGroWLlaW0t5Fbyx02jjNkGK24qfpXAVNtvgLRcxEFkdoQ4+VGtzB
    z7TZF+fVhMzoPXyAh+hUHGj6FF+ktEa9unxlqlHrl6UaUvAQjt0Ui9PxXBSKqFYr
    AAlgL/FAeKRn721vPRQn1MnWQF4IB9o8+wBnfVP9lPsQl4dcvMudecM=
    -----END RSA PRIVATE KEY-----`;

    encrypt(data: any) {
        const dataJson = JSON.stringify(data);
        const rsa = forge.pki.publicKeyFromPem(this.PUBLICKEY);
        const encrypted = rsa.encrypt(dataJson, 'RSA-OAEP', {
            md: forge.md.sha256.create()
        });
        return window.btoa(encrypted);
    }
    decrypt(data: any) {
        const rsa = forge.pki.privateKeyFromPem(this.PRIVATEKEY);
        const infoDescrypt = rsa.decrypt(window.atob(data), 'RSA-OAEP', {
            md: forge.md.sha256.create()
        });
        return infoDescrypt;

    }

}