export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      this.updateQualityOfItem(item);
    }

    return this.items;
  }

  private updateQualityOfItem(item: Item) {
    if (item.name == 'Aged Brie' as string) {
      this.updateQualityOfBrie(item);
      return;
    }
    if (item.name == 'Backstage passes to a TAFKAL80ETC concert' as string) {
      this.updateQualityOfBackstagePasses(item);
      return;
    }
    if (item.name == 'Sulfuras, Hand of Ragnaros' as string) {
      return;
    }
    if (item.name.includes('Conjured')) {
      this.updateDefaultQuality(item, 2);
      return;
    } else {
      this.updateDefaultQuality(item, 1);
      return;
    }
  }

  private updateDefaultQuality(item: Item, decrease: number) {
    if (item.quality > 0) {
      item.quality = item.quality - decrease
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0) {
      if (item.quality > 0) {
        item.quality = item.quality - decrease
      }
    }
  }

  private updateQualityOfBackstagePasses(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1
      if (item.sellIn < 11) {
        if (item.quality < 50) {
          item.quality = item.quality + 1
        }
      }
      if (item.sellIn < 6) {
        if (item.quality < 50) {
          item.quality = item.quality + 1
        }
      }
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0) {
      item.quality = item.quality - item.quality
    }
  }

  private updateQualityOfBrie(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0) {
      if (item.quality < 50) {
        item.quality = item.quality + 1
      }
    }
  }
}
