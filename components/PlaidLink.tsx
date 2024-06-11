import { useCallback, useEffect, useState } from 'react';
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';


const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const router = useRouter();

  const [token, setToken] = useState('');

  const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
    // await exchangePublicToken({
    //   publicToken: public_token,
    //   user
    // });

    router.push('/');
  }, [user]);

  const config: PlaidLinkOptions = {
    token,
    onSuccess
  };

  const { open, ready } = usePlaidLink(config);

  useEffect(() => {
    const getLinkToken = async () => {
      // const data = await createLinkToken(user);
      // setToken(data?.linkToken)
    };

    getLinkToken();
  }, [])

  return (
    <>
      {variant === 'primary' ? (
        <Button
          onClick={() => open()}
          disabled={!ready}
          className='plaidlink-primary'
        >
          Connect bank
        </Button>
      ) : variant === 'ghost' ? (
        <Button>
          Connect bank
        </Button>
      ) : (
        <Button>
          Connect bank
        </Button>
      )}
    </>
  );
};

export default PlaidLink;