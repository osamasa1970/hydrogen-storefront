import {createContext, useContext, useEffect, useState, useMemo} from 'react';
import {useFetcher} from '@remix-run/react';

const defaultB2BLocationContextValue = {
  company: undefined,
  companyLocationId: undefined,
  modalOpen: undefined,
  setModalOpen: () => {},
};

const B2BLocationContext = createContext(defaultB2BLocationContextValue);

/**
 * @param {{children: React.ReactNode}}
 */
export function B2BLocationProvider({children}) {
  const fetcher = useFetcher();
  const [modalOpen, setModalOpen] = useState(fetcher?.data?.modalOpen);

  useEffect(() => {
    if (fetcher.data || fetcher.state === 'loading') return;

    fetcher.load('/b2blocations');
  }, [fetcher]);

  const value = useMemo(() => {
    return {
      ...defaultB2BLocationContextValue,
      ...fetcher.data,
      modalOpen: modalOpen ?? fetcher?.data?.modalOpen,
      setModalOpen,
    };
  }, [fetcher, modalOpen]);

  return (
    <B2BLocationContext.Provider value={value}>
      {children}
    </B2BLocationContext.Provider>
  );
}

/**
 * @return {import("/workspaces/barebones-nodejs-6/hydrogen-storefront/app/components/B2BLocationProvider").B2BLocationContextValue}
 */
export function useB2BLocation() {
  return useContext(B2BLocationContext);
}

/**
 * @typedef {{
 *   company?: CustomerCompany;
 *   companyLocationId?: string;
 *   modalOpen?: boolean;
 *   setModalOpen: (b: boolean) => void;
 * }} B2BLocationContextValue
 */
