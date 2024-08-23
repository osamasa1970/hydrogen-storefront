/**
 * @param {QuantityRulesProps} [quantityRule]
 */
export const hasQuantityRules = (quantityRule) => {
  return (
    quantityRule &&
    (quantityRule?.increment != 1 ||
      quantityRule?.minimum != 1 ||
      quantityRule?.maximum)
  );
};

/**
 * @param {QuantityRulesProps}
 */
export function QuantityRules({maximum, minimum, increment}) {
  return (
    <>
      <h4>Quantity Rules</h4>
      <table className="rule-table">
        <thead>
          <tr>
            <th className="table-haeading">Increment</th>
            <th className="table-haeading">Minimum</th>
            <th className="table-haeading">Maximum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="table-item">{increment}</th>
            <th className="table-item">{minimum}</th>
            <th className="table-item">{maximum}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
}

/**
 * @typedef {{
 *   maximum?: Maybe<number> | undefined;
 *   minimum?: Maybe<number> | undefined;
 *   increment?: Maybe<number> | undefined;
 * }} QuantityRulesProps
 */

/** @typedef {import('@shopify/hydrogen/customer-account-api-types').Maybe} Maybe */
