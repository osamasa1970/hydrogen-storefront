import {CartForm} from '@shopify/hydrogen';
import {useB2BLocation} from './B2BLocationProvider';

export function B2BLocationSelector() {
  const {company, modalOpen, setModalOpen} = useB2BLocation();

  const locations = company?.locations?.edges
    ? company.locations.edges.map((location) => {
        return {...location.node};
      })
    : [];

  if (!company || !modalOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Logged in for {company.name}</h2>
        <legend>Choose a location:</legend>
        <div className="location-list">
          {locations.map((location) => {
            const addressLines =
              location?.shippingAddress?.formattedAddress ?? [];
            return (
              <CartForm
                key={location.id}
                route="/cart"
                action={CartForm.ACTIONS.BuyerIdentityUpdate}
                inputs={{
                  buyerIdentity: {companyLocationId: location.id},
                }}
              >
                {(fetcher) => (
                  <label>
                    <button
                      onClick={(event) => {
                        setModalOpen(false);
                        fetcher.submit(event.currentTarget.form, {
                          method: 'POST',
                        });
                      }}
                      className="location-item"
                    >
                      <div>
                        <p>
                          <strong>{location.name}</strong>
                        </p>
                        {addressLines.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </button>
                  </label>
                )}
              </CartForm>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/** @typedef {import('~/root').CustomerCompanyLocation} CustomerCompanyLocation */
/** @typedef {import('~/root').CustomerCompanyLocationConnection} CustomerCompanyLocationConnection */
