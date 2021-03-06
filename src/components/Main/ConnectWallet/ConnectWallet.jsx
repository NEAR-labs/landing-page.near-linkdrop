import React from "react";
import * as connectWalletStyles from "./ConnectWallet.module.css";
import ConnectWalletIcon from "../../../images/ConnectWallet.png";
import * as appStyles from "../../App.module.css";
import * as mainStyle from "../Main.module.css";
import {LearnMore} from "../general/LearnMore/LearnMore";

export const ConnectWallet = () => (
  <div className={mainStyle.bannerContainer}>
    <div className={connectWalletStyles.leftBlock}>
      <div className={connectWalletStyles.banner}>
        <img src={ConnectWalletIcon} alt="Connect Wallet" />
      </div>
    </div>
    <div className={connectWalletStyles.rightBlock}>
      <div className={appStyles.linkApp}>STEP 1</div>
      <div className={appStyles.bannerTitle}>Connect Wallet</div>
      <div className={appStyles.bannerSubTitle}>
        Connect the Linkdrop app with your NEAR wallet
      </div>
      <LearnMore />
    </div>
  </div>
);