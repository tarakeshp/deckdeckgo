/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@deckdeckgo/core';
import '@deckdeckgo/highlight-code';
import '@deckdeckgo/inline-editor';
import '@deckdeckgo/lazy-img';
import '@deckdeckgo/qrcode';
import '@deckdeckgo/remote';
import '@ionic/core';
import 'ionicons';
import {
  EventEmitter,
} from '@stencil/core';


export namespace Components {

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface AppAvatar {
    'src': string;
  }
  interface AppAvatarAttributes extends StencilHTMLAttributes {
    'src'?: string;
  }

  interface AppFooter {}
  interface AppFooterAttributes extends StencilHTMLAttributes {}

  interface AppLogo {}
  interface AppLogoAttributes extends StencilHTMLAttributes {}

  interface AppMenu {}
  interface AppMenuAttributes extends StencilHTMLAttributes {}

  interface AppNavigationActions {
    'presentation': boolean;
    'publish': boolean;
    'signIn': boolean;
  }
  interface AppNavigationActionsAttributes extends StencilHTMLAttributes {
    'onActionPublish'?: (event: CustomEvent<void>) => void;
    'presentation'?: boolean;
    'publish'?: boolean;
    'signIn'?: boolean;
  }

  interface AppNavigation {
    'logo': boolean;
    'menuToggle': boolean;
    'presentation': boolean;
    'publish': boolean;
    'user': boolean;
  }
  interface AppNavigationAttributes extends StencilHTMLAttributes {
    'logo'?: boolean;
    'menuToggle'?: boolean;
    'presentation'?: boolean;
    'publish'?: boolean;
    'user'?: boolean;
  }

  interface AppUserInfo {
    'avatarColSize': number;
  }
  interface AppUserInfoAttributes extends StencilHTMLAttributes {
    'avatarColSize'?: number;
  }

  interface AppAddSlideAction {}
  interface AppAddSlideActionAttributes extends StencilHTMLAttributes {
    'onActionOpenSlideAdd'?: (event: CustomEvent<UIEvent>) => void;
  }

  interface AppEditorToolbar {
    'blurSelectedElement': () => Promise<void>;
    'hideToolbar': () => Promise<void>;
    'touch': (element: HTMLElement) => Promise<void>;
    'unSelect': () => Promise<void>;
  }
  interface AppEditorToolbarAttributes extends StencilHTMLAttributes {
    'onBlockSlide'?: (event: CustomEvent<boolean>) => void;
    'onCodeDidChange'?: (event: CustomEvent<HTMLElement>) => void;
    'onDeckDidChange'?: (event: CustomEvent<HTMLElement>) => void;
    'onSlideDelete'?: (event: CustomEvent<HTMLElement>) => void;
    'onSlideDidChange'?: (event: CustomEvent<HTMLElement>) => void;
  }

  interface AppStockPhotos {
    'photosEven': UnsplashPhoto[];
    'photosOdd': UnsplashPhoto[];
  }
  interface AppStockPhotosAttributes extends StencilHTMLAttributes {
    'onSelectPhoto'?: (event: CustomEvent<UnsplashPhoto>) => void;
    'photosEven'?: UnsplashPhoto[];
    'photosOdd'?: UnsplashPhoto[];
  }

  interface AppDemo {}
  interface AppDemoAttributes extends StencilHTMLAttributes {}

  interface AppFeed {}
  interface AppFeedAttributes extends StencilHTMLAttributes {}

  interface AppPopular {}
  interface AppPopularAttributes extends StencilHTMLAttributes {}

  interface AppFeedCard {
    'author': string;
    'caption': string;
    'compact': boolean;
    'description': string;
    'editable': boolean;
    'miniature': boolean;
    'publication': Date;
  }
  interface AppFeedCardAttributes extends StencilHTMLAttributes {
    'author'?: string;
    'caption'?: string;
    'compact'?: boolean;
    'description'?: string;
    'editable'?: boolean;
    'miniature'?: boolean;
    'onEditCaption'?: (event: CustomEvent<string>) => void;
    'publication'?: Date;
  }

  interface AppUserDelete {
    'username': string;
  }
  interface AppUserDeleteAttributes extends StencilHTMLAttributes {
    'username'?: string;
  }

  interface AppGif {}
  interface AppGifAttributes extends StencilHTMLAttributes {}

  interface AppPhoto {}
  interface AppPhotoAttributes extends StencilHTMLAttributes {}

  interface AppPublish {
    'description': string;
  }
  interface AppPublishAttributes extends StencilHTMLAttributes {
    'description'?: string;
  }

  interface AppRemote {}
  interface AppRemoteAttributes extends StencilHTMLAttributes {}

  interface AppSlideNavigate {
    'slides': string[];
  }
  interface AppSlideNavigateAttributes extends StencilHTMLAttributes {
    'slides'?: string[];
  }

  interface AppAbout {}
  interface AppAboutAttributes extends StencilHTMLAttributes {}

  interface AppContact {}
  interface AppContactAttributes extends StencilHTMLAttributes {}

  interface AppOpensource {}
  interface AppOpensourceAttributes extends StencilHTMLAttributes {}

  interface AppPrivacy {}
  interface AppPrivacyAttributes extends StencilHTMLAttributes {}

  interface AppServices {}
  interface AppServicesAttributes extends StencilHTMLAttributes {}

  interface AppTeam {}
  interface AppTeamAttributes extends StencilHTMLAttributes {}

  interface AppTerms {}
  interface AppTermsAttributes extends StencilHTMLAttributes {}

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppSettings {}
  interface AppSettingsAttributes extends StencilHTMLAttributes {}

  interface AppSignin {
    'redirect': string;
    'redirectId': string;
  }
  interface AppSigninAttributes extends StencilHTMLAttributes {
    'redirect'?: string;
    'redirectId'?: string;
  }

  interface AppEditor {
    'deckId': string;
  }
  interface AppEditorAttributes extends StencilHTMLAttributes {
    'deckId'?: string;
  }

  interface AppUserMenu {}
  interface AppUserMenuAttributes extends StencilHTMLAttributes {}

  interface AppCode {
    'codeDidChange': EventEmitter<HTMLElement>;
    'selectedElement': HTMLElement;
  }
  interface AppCodeAttributes extends StencilHTMLAttributes {
    'codeDidChange'?: EventEmitter<HTMLElement>;
    'selectedElement'?: HTMLElement;
  }

  interface AppDeckOrSlide {}
  interface AppDeckOrSlideAttributes extends StencilHTMLAttributes {}

  interface AppEditorActions {}
  interface AppEditorActionsAttributes extends StencilHTMLAttributes {}

  interface AppImage {
    'deckOrSlide': boolean;
  }
  interface AppImageAttributes extends StencilHTMLAttributes {
    'deckOrSlide'?: boolean;
  }

  interface AppSlideType {}
  interface AppSlideTypeAttributes extends StencilHTMLAttributes {}

  interface AppSlotType {
    'selectedElement': HTMLElement;
  }
  interface AppSlotTypeAttributes extends StencilHTMLAttributes {
    'selectedElement'?: HTMLElement;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppRoot': Components.AppRoot;
    'AppAvatar': Components.AppAvatar;
    'AppFooter': Components.AppFooter;
    'AppLogo': Components.AppLogo;
    'AppMenu': Components.AppMenu;
    'AppNavigationActions': Components.AppNavigationActions;
    'AppNavigation': Components.AppNavigation;
    'AppUserInfo': Components.AppUserInfo;
    'AppAddSlideAction': Components.AppAddSlideAction;
    'AppEditorToolbar': Components.AppEditorToolbar;
    'AppStockPhotos': Components.AppStockPhotos;
    'AppDemo': Components.AppDemo;
    'AppFeed': Components.AppFeed;
    'AppPopular': Components.AppPopular;
    'AppFeedCard': Components.AppFeedCard;
    'AppUserDelete': Components.AppUserDelete;
    'AppGif': Components.AppGif;
    'AppPhoto': Components.AppPhoto;
    'AppPublish': Components.AppPublish;
    'AppRemote': Components.AppRemote;
    'AppSlideNavigate': Components.AppSlideNavigate;
    'AppAbout': Components.AppAbout;
    'AppContact': Components.AppContact;
    'AppOpensource': Components.AppOpensource;
    'AppPrivacy': Components.AppPrivacy;
    'AppServices': Components.AppServices;
    'AppTeam': Components.AppTeam;
    'AppTerms': Components.AppTerms;
    'AppHome': Components.AppHome;
    'AppSettings': Components.AppSettings;
    'AppSignin': Components.AppSignin;
    'AppEditor': Components.AppEditor;
    'AppUserMenu': Components.AppUserMenu;
    'AppCode': Components.AppCode;
    'AppDeckOrSlide': Components.AppDeckOrSlide;
    'AppEditorActions': Components.AppEditorActions;
    'AppImage': Components.AppImage;
    'AppSlideType': Components.AppSlideType;
    'AppSlotType': Components.AppSlotType;
  }

  interface StencilIntrinsicElements {
    'app-root': Components.AppRootAttributes;
    'app-avatar': Components.AppAvatarAttributes;
    'app-footer': Components.AppFooterAttributes;
    'app-logo': Components.AppLogoAttributes;
    'app-menu': Components.AppMenuAttributes;
    'app-navigation-actions': Components.AppNavigationActionsAttributes;
    'app-navigation': Components.AppNavigationAttributes;
    'app-user-info': Components.AppUserInfoAttributes;
    'app-add-slide-action': Components.AppAddSlideActionAttributes;
    'app-editor-toolbar': Components.AppEditorToolbarAttributes;
    'app-stock-photos': Components.AppStockPhotosAttributes;
    'app-demo': Components.AppDemoAttributes;
    'app-feed': Components.AppFeedAttributes;
    'app-popular': Components.AppPopularAttributes;
    'app-feed-card': Components.AppFeedCardAttributes;
    'app-user-delete': Components.AppUserDeleteAttributes;
    'app-gif': Components.AppGifAttributes;
    'app-photo': Components.AppPhotoAttributes;
    'app-publish': Components.AppPublishAttributes;
    'app-remote': Components.AppRemoteAttributes;
    'app-slide-navigate': Components.AppSlideNavigateAttributes;
    'app-about': Components.AppAboutAttributes;
    'app-contact': Components.AppContactAttributes;
    'app-opensource': Components.AppOpensourceAttributes;
    'app-privacy': Components.AppPrivacyAttributes;
    'app-services': Components.AppServicesAttributes;
    'app-team': Components.AppTeamAttributes;
    'app-terms': Components.AppTermsAttributes;
    'app-home': Components.AppHomeAttributes;
    'app-settings': Components.AppSettingsAttributes;
    'app-signin': Components.AppSigninAttributes;
    'app-editor': Components.AppEditorAttributes;
    'app-user-menu': Components.AppUserMenuAttributes;
    'app-code': Components.AppCodeAttributes;
    'app-deck-or-slide': Components.AppDeckOrSlideAttributes;
    'app-editor-actions': Components.AppEditorActionsAttributes;
    'app-image': Components.AppImageAttributes;
    'app-slide-type': Components.AppSlideTypeAttributes;
    'app-slot-type': Components.AppSlotTypeAttributes;
  }


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppAvatarElement extends Components.AppAvatar, HTMLStencilElement {}
  var HTMLAppAvatarElement: {
    prototype: HTMLAppAvatarElement;
    new (): HTMLAppAvatarElement;
  };

  interface HTMLAppFooterElement extends Components.AppFooter, HTMLStencilElement {}
  var HTMLAppFooterElement: {
    prototype: HTMLAppFooterElement;
    new (): HTMLAppFooterElement;
  };

  interface HTMLAppLogoElement extends Components.AppLogo, HTMLStencilElement {}
  var HTMLAppLogoElement: {
    prototype: HTMLAppLogoElement;
    new (): HTMLAppLogoElement;
  };

  interface HTMLAppMenuElement extends Components.AppMenu, HTMLStencilElement {}
  var HTMLAppMenuElement: {
    prototype: HTMLAppMenuElement;
    new (): HTMLAppMenuElement;
  };

  interface HTMLAppNavigationActionsElement extends Components.AppNavigationActions, HTMLStencilElement {}
  var HTMLAppNavigationActionsElement: {
    prototype: HTMLAppNavigationActionsElement;
    new (): HTMLAppNavigationActionsElement;
  };

  interface HTMLAppNavigationElement extends Components.AppNavigation, HTMLStencilElement {}
  var HTMLAppNavigationElement: {
    prototype: HTMLAppNavigationElement;
    new (): HTMLAppNavigationElement;
  };

  interface HTMLAppUserInfoElement extends Components.AppUserInfo, HTMLStencilElement {}
  var HTMLAppUserInfoElement: {
    prototype: HTMLAppUserInfoElement;
    new (): HTMLAppUserInfoElement;
  };

  interface HTMLAppAddSlideActionElement extends Components.AppAddSlideAction, HTMLStencilElement {}
  var HTMLAppAddSlideActionElement: {
    prototype: HTMLAppAddSlideActionElement;
    new (): HTMLAppAddSlideActionElement;
  };

  interface HTMLAppEditorToolbarElement extends Components.AppEditorToolbar, HTMLStencilElement {}
  var HTMLAppEditorToolbarElement: {
    prototype: HTMLAppEditorToolbarElement;
    new (): HTMLAppEditorToolbarElement;
  };

  interface HTMLAppStockPhotosElement extends Components.AppStockPhotos, HTMLStencilElement {}
  var HTMLAppStockPhotosElement: {
    prototype: HTMLAppStockPhotosElement;
    new (): HTMLAppStockPhotosElement;
  };

  interface HTMLAppDemoElement extends Components.AppDemo, HTMLStencilElement {}
  var HTMLAppDemoElement: {
    prototype: HTMLAppDemoElement;
    new (): HTMLAppDemoElement;
  };

  interface HTMLAppFeedElement extends Components.AppFeed, HTMLStencilElement {}
  var HTMLAppFeedElement: {
    prototype: HTMLAppFeedElement;
    new (): HTMLAppFeedElement;
  };

  interface HTMLAppPopularElement extends Components.AppPopular, HTMLStencilElement {}
  var HTMLAppPopularElement: {
    prototype: HTMLAppPopularElement;
    new (): HTMLAppPopularElement;
  };

  interface HTMLAppFeedCardElement extends Components.AppFeedCard, HTMLStencilElement {}
  var HTMLAppFeedCardElement: {
    prototype: HTMLAppFeedCardElement;
    new (): HTMLAppFeedCardElement;
  };

  interface HTMLAppUserDeleteElement extends Components.AppUserDelete, HTMLStencilElement {}
  var HTMLAppUserDeleteElement: {
    prototype: HTMLAppUserDeleteElement;
    new (): HTMLAppUserDeleteElement;
  };

  interface HTMLAppGifElement extends Components.AppGif, HTMLStencilElement {}
  var HTMLAppGifElement: {
    prototype: HTMLAppGifElement;
    new (): HTMLAppGifElement;
  };

  interface HTMLAppPhotoElement extends Components.AppPhoto, HTMLStencilElement {}
  var HTMLAppPhotoElement: {
    prototype: HTMLAppPhotoElement;
    new (): HTMLAppPhotoElement;
  };

  interface HTMLAppPublishElement extends Components.AppPublish, HTMLStencilElement {}
  var HTMLAppPublishElement: {
    prototype: HTMLAppPublishElement;
    new (): HTMLAppPublishElement;
  };

  interface HTMLAppRemoteElement extends Components.AppRemote, HTMLStencilElement {}
  var HTMLAppRemoteElement: {
    prototype: HTMLAppRemoteElement;
    new (): HTMLAppRemoteElement;
  };

  interface HTMLAppSlideNavigateElement extends Components.AppSlideNavigate, HTMLStencilElement {}
  var HTMLAppSlideNavigateElement: {
    prototype: HTMLAppSlideNavigateElement;
    new (): HTMLAppSlideNavigateElement;
  };

  interface HTMLAppAboutElement extends Components.AppAbout, HTMLStencilElement {}
  var HTMLAppAboutElement: {
    prototype: HTMLAppAboutElement;
    new (): HTMLAppAboutElement;
  };

  interface HTMLAppContactElement extends Components.AppContact, HTMLStencilElement {}
  var HTMLAppContactElement: {
    prototype: HTMLAppContactElement;
    new (): HTMLAppContactElement;
  };

  interface HTMLAppOpensourceElement extends Components.AppOpensource, HTMLStencilElement {}
  var HTMLAppOpensourceElement: {
    prototype: HTMLAppOpensourceElement;
    new (): HTMLAppOpensourceElement;
  };

  interface HTMLAppPrivacyElement extends Components.AppPrivacy, HTMLStencilElement {}
  var HTMLAppPrivacyElement: {
    prototype: HTMLAppPrivacyElement;
    new (): HTMLAppPrivacyElement;
  };

  interface HTMLAppServicesElement extends Components.AppServices, HTMLStencilElement {}
  var HTMLAppServicesElement: {
    prototype: HTMLAppServicesElement;
    new (): HTMLAppServicesElement;
  };

  interface HTMLAppTeamElement extends Components.AppTeam, HTMLStencilElement {}
  var HTMLAppTeamElement: {
    prototype: HTMLAppTeamElement;
    new (): HTMLAppTeamElement;
  };

  interface HTMLAppTermsElement extends Components.AppTerms, HTMLStencilElement {}
  var HTMLAppTermsElement: {
    prototype: HTMLAppTermsElement;
    new (): HTMLAppTermsElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppSettingsElement extends Components.AppSettings, HTMLStencilElement {}
  var HTMLAppSettingsElement: {
    prototype: HTMLAppSettingsElement;
    new (): HTMLAppSettingsElement;
  };

  interface HTMLAppSigninElement extends Components.AppSignin, HTMLStencilElement {}
  var HTMLAppSigninElement: {
    prototype: HTMLAppSigninElement;
    new (): HTMLAppSigninElement;
  };

  interface HTMLAppEditorElement extends Components.AppEditor, HTMLStencilElement {}
  var HTMLAppEditorElement: {
    prototype: HTMLAppEditorElement;
    new (): HTMLAppEditorElement;
  };

  interface HTMLAppUserMenuElement extends Components.AppUserMenu, HTMLStencilElement {}
  var HTMLAppUserMenuElement: {
    prototype: HTMLAppUserMenuElement;
    new (): HTMLAppUserMenuElement;
  };

  interface HTMLAppCodeElement extends Components.AppCode, HTMLStencilElement {}
  var HTMLAppCodeElement: {
    prototype: HTMLAppCodeElement;
    new (): HTMLAppCodeElement;
  };

  interface HTMLAppDeckOrSlideElement extends Components.AppDeckOrSlide, HTMLStencilElement {}
  var HTMLAppDeckOrSlideElement: {
    prototype: HTMLAppDeckOrSlideElement;
    new (): HTMLAppDeckOrSlideElement;
  };

  interface HTMLAppEditorActionsElement extends Components.AppEditorActions, HTMLStencilElement {}
  var HTMLAppEditorActionsElement: {
    prototype: HTMLAppEditorActionsElement;
    new (): HTMLAppEditorActionsElement;
  };

  interface HTMLAppImageElement extends Components.AppImage, HTMLStencilElement {}
  var HTMLAppImageElement: {
    prototype: HTMLAppImageElement;
    new (): HTMLAppImageElement;
  };

  interface HTMLAppSlideTypeElement extends Components.AppSlideType, HTMLStencilElement {}
  var HTMLAppSlideTypeElement: {
    prototype: HTMLAppSlideTypeElement;
    new (): HTMLAppSlideTypeElement;
  };

  interface HTMLAppSlotTypeElement extends Components.AppSlotType, HTMLStencilElement {}
  var HTMLAppSlotTypeElement: {
    prototype: HTMLAppSlotTypeElement;
    new (): HTMLAppSlotTypeElement;
  };

  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement
    'app-avatar': HTMLAppAvatarElement
    'app-footer': HTMLAppFooterElement
    'app-logo': HTMLAppLogoElement
    'app-menu': HTMLAppMenuElement
    'app-navigation-actions': HTMLAppNavigationActionsElement
    'app-navigation': HTMLAppNavigationElement
    'app-user-info': HTMLAppUserInfoElement
    'app-add-slide-action': HTMLAppAddSlideActionElement
    'app-editor-toolbar': HTMLAppEditorToolbarElement
    'app-stock-photos': HTMLAppStockPhotosElement
    'app-demo': HTMLAppDemoElement
    'app-feed': HTMLAppFeedElement
    'app-popular': HTMLAppPopularElement
    'app-feed-card': HTMLAppFeedCardElement
    'app-user-delete': HTMLAppUserDeleteElement
    'app-gif': HTMLAppGifElement
    'app-photo': HTMLAppPhotoElement
    'app-publish': HTMLAppPublishElement
    'app-remote': HTMLAppRemoteElement
    'app-slide-navigate': HTMLAppSlideNavigateElement
    'app-about': HTMLAppAboutElement
    'app-contact': HTMLAppContactElement
    'app-opensource': HTMLAppOpensourceElement
    'app-privacy': HTMLAppPrivacyElement
    'app-services': HTMLAppServicesElement
    'app-team': HTMLAppTeamElement
    'app-terms': HTMLAppTermsElement
    'app-home': HTMLAppHomeElement
    'app-settings': HTMLAppSettingsElement
    'app-signin': HTMLAppSigninElement
    'app-editor': HTMLAppEditorElement
    'app-user-menu': HTMLAppUserMenuElement
    'app-code': HTMLAppCodeElement
    'app-deck-or-slide': HTMLAppDeckOrSlideElement
    'app-editor-actions': HTMLAppEditorActionsElement
    'app-image': HTMLAppImageElement
    'app-slide-type': HTMLAppSlideTypeElement
    'app-slot-type': HTMLAppSlotTypeElement
  }

  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'app-avatar': HTMLAppAvatarElement;
    'app-footer': HTMLAppFooterElement;
    'app-logo': HTMLAppLogoElement;
    'app-menu': HTMLAppMenuElement;
    'app-navigation-actions': HTMLAppNavigationActionsElement;
    'app-navigation': HTMLAppNavigationElement;
    'app-user-info': HTMLAppUserInfoElement;
    'app-add-slide-action': HTMLAppAddSlideActionElement;
    'app-editor-toolbar': HTMLAppEditorToolbarElement;
    'app-stock-photos': HTMLAppStockPhotosElement;
    'app-demo': HTMLAppDemoElement;
    'app-feed': HTMLAppFeedElement;
    'app-popular': HTMLAppPopularElement;
    'app-feed-card': HTMLAppFeedCardElement;
    'app-user-delete': HTMLAppUserDeleteElement;
    'app-gif': HTMLAppGifElement;
    'app-photo': HTMLAppPhotoElement;
    'app-publish': HTMLAppPublishElement;
    'app-remote': HTMLAppRemoteElement;
    'app-slide-navigate': HTMLAppSlideNavigateElement;
    'app-about': HTMLAppAboutElement;
    'app-contact': HTMLAppContactElement;
    'app-opensource': HTMLAppOpensourceElement;
    'app-privacy': HTMLAppPrivacyElement;
    'app-services': HTMLAppServicesElement;
    'app-team': HTMLAppTeamElement;
    'app-terms': HTMLAppTermsElement;
    'app-home': HTMLAppHomeElement;
    'app-settings': HTMLAppSettingsElement;
    'app-signin': HTMLAppSigninElement;
    'app-editor': HTMLAppEditorElement;
    'app-user-menu': HTMLAppUserMenuElement;
    'app-code': HTMLAppCodeElement;
    'app-deck-or-slide': HTMLAppDeckOrSlideElement;
    'app-editor-actions': HTMLAppEditorActionsElement;
    'app-image': HTMLAppImageElement;
    'app-slide-type': HTMLAppSlideTypeElement;
    'app-slot-type': HTMLAppSlotTypeElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
