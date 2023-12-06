import { Injectable } from '@nestjs/common';
import { Category, ConvertedProduct } from 'src/challenge1-type';
import { TranslateWord } from 'src/challenge2-type';

@Injectable()
export class UtilsService {
  async convertProduct(
    product: {
      id: number;
      name: string;
      keyword: string;
    },
    categoryDict: {
      [key: string]: Category;
    },
  ): Promise<ConvertedProduct | null> {
    const matchingCategory = categoryDict[product.keyword];
    let convertedProduct = null;
    if (matchingCategory) {
      convertedProduct = {
        product: {
          name: product.name,
          category: matchingCategory,
        },
      };
    }
    return convertedProduct;
  }
  async translateOptionName(
    optionName: string,
    translateWordList: TranslateWord[],
  ): Promise<string> {
    let translatedOptionName = optionName;
    for (const translateWord of translateWordList) {
      translatedOptionName = translatedOptionName.replace(
        new RegExp(translateWord.src, 'g'),
        translateWord.dest,
      );
    }
    return translatedOptionName;
  }
}
