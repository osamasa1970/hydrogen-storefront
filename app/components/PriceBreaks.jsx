import {Money} from '@shopify/hydrogen';

/**
 * @param {PriceBreaksProps}
 */
export function PriceBreaks({priceBreaks}) {
  return (
    <>
      <h4>Volume Pricing</h4>
      <table className="rule-table">
        <thead>
          <tr>
            <th className="table-haeading">Minimum Quantity</th>
            <th className="table-haeading">Unit Price</th>
          </tr>
        </thead>
        <tbody>
          {priceBreaks.map((priceBreak, index) => {
            return (
              <tr key={index}>
                <th className="table-item">{priceBreak.minimumQuantity}</th>
                <th className="table-item">
                  <Money data={priceBreak.price} />
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

/**
 * @typedef {{
 *   minimumQuantity: number;
 *   price: MoneyV2;
 * }} PriceBreak
 */
/**
 * @typedef {{
 *   priceBreaks: PriceBreak[];
 * }} PriceBreaksProps
 */
