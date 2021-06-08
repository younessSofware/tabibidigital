export class PredParam {
    tagImage: any ;
    prefix = "./../../assets/predictions/"
    sufix = "/tfjs_model/model.json"
    models = [
        {
            type: 'skin',
            path: this.prefix + 'skin' + this.sufix,
            sizeTargetImage: {
                width: 32,
                height: 32
            }
        },
        {
            type: 'tumor',
            path: this.prefix + 'tumor' + this.sufix,
            sizeTargetImage: {
                width: 224,
                height: 224
            }
        },
        {
            type: 'malaria',
            path: this.prefix + 'malaria' + this.sufix,
            sizeTargetImage: {
                width: 32,
                height: 32
            }
        },
        {
            type: 'Breast',
            path: this.prefix + 'Breast' + this.sufix,
            sizeTargetImage: {
                width: 28,
                height: 28
            }
        },
    ];
    constructor(tagImage: any ){
        this.tagImage = tagImage;
    }
}