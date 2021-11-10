import React from "react";
import * as connectWalletStyles from "./ConnectWallet.module.css";
import ConnectWalletIcon from "../../../images/ConnectWallet.png";
import * as appStyles from "../../App.module.css";
import * as mainStyle from "../Main.module.css";

export const ConnectWallet = () => (
  <div className={mainStyle.bannerContainer}>
    <div className={connectWalletStyles.leftBlock}>
      <div className={connectWalletStyles.banner}>
        <img src={ConnectWalletIcon} alt="Connect Wallet" />
      </div>
    </div>
    <div className={connectWalletStyles.rightBlock}>
      <div className={appStyles.linkApp}>STEP 1</div>
      <div className={appStyles.bannerTitle}>Connect wallet</div>
      <div className={appStyles.bannerSubTitle}>
        Connect the Linkdrop app with your NEAR wallet
      </div>
      <div className={appStyles.moreLink}>
        <a href="https://wiki.near.org/resources/faq/onboarding-with-linkdrop">Learn more ></a>
      </div>
    </div>
  </div>
);