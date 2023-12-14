import { Injectable } from '@nestjs/common';
import { Category, ConvertedProduct } from 'src/challenge1-type';
import { TranslateWord } from 'src/challenge2-type';

@Injectable()
export class UtilsService {
  private translateWordMap = new Map<string, string>();
  constructor() {}
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
    if (!this.translateWordMap.size) {
      translateWordList.forEach((word) => {
        this.translateWordMap.set(word.src, word.dest);
      });
    }

    let words = optionName.split(' ');

    words = words.map((word) => {
      const translatedWord = this.translateWordMap.get(word);
      return translatedWord || word;
    });

    return words.join(' ');
  }
}
