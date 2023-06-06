import { Component, createContext } from 'react';

export const SiteContext = createContext<any>({});

export class SiteProvider extends Component {
  state = {
    isMenuOpen: false,
    isLoading: false
  };

  componentDidMount() {}

  startLoading = () => {
    this.setState({ isLoading: true });
  };

  stopLoading = () => {
    this.setState({ isLoading: true });
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  openMenu = () => {
    this.setState({ isMenuOpen: true });
  };

  render() {
    return (
      <SiteContext.Provider
        value={{
          ...this.state,
          startLoading: this.startLoading,
          stopLoading: this.stopLoading,
          openMenu: this.openMenu,
          closeMenu: this.closeMenu
        }}
      >
        {
          //@ts-ignore
          this.props.children
        }
      </SiteContext.Provider>
    );
  }
}

export const SiteConsumer = SiteContext.Consumer;

export default SiteProvider;
