import { ConnectButton } from "web3uikit";

const Header = () => {
  return (
    <nav className="p-5 border-b-2 flex flex-row">
      <h2 className="py-4 px-4 font-bold text-xl">
        {" "}
        Connect to Wallet Button with Web3UiKit and Moralis
      </h2>
      <div className="ml-auto py-2 px-4">
        <ConnectButton moralisAuth={false} />
      </div>
    </nav>
  );
};

export default Header;
