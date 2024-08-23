import {redirect} from '@shopify/remix-oxygen';

// if we dont implement this, /account/logout will get caught by account.$.tsx to do login

export async function loader() {
  return redirect('/');
}

/**
 * @param {ActionFunctionArgs}
 */
export async function action({context}) {
  /**********  EXAMPLE UPDATE STARTS  ************/
  await context.cart.updateBuyerIdentity({
    companyLocationId: null,
    customerAccessToken: null,
  });
  /**********   EXAMPLE UPDATE END   *************/

  return context.customerAccount.logout();
}

/** @typedef {import('@shopify/remix-oxygen').ActionFunctionArgs} ActionFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof action>} ActionReturnData */
