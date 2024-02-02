import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });

  it('should decreace conjured with the speed of 2', () => {
    const gildedRose = new GildedRose([new Item('Conjured', 10, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(38);
  })
});
