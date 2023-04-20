import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'CustomerProjectsLogicAppRequestButtonWebPartStrings';
import CustomerProjectsLogicAppRequestButton from './components/CustomerProjectsLogicAppRequestButton';

import { SPFI } from '@pnp/sp';
//import { getSP } from '../../pnp-preset';
import { ICustomerProjectsLogicAppRequestButtonProps } from './components/CustomerProjectsLogicAppRequestButtonProps';
export interface ICustomerProjectsLogicAppRequestButtonWebPartProps {
  description: string;
  sp: SPFI;
}

export default class CustomerProjectsLogicAppRequestButtonWebPart extends BaseClientSideWebPart<ICustomerProjectsLogicAppRequestButtonWebPartProps> {

  //private _sp: SPFI;

  public render(): void {
    const element: React.ReactElement<ICustomerProjectsLogicAppRequestButtonProps> = React.createElement(
      CustomerProjectsLogicAppRequestButton,
      {
        description: this.properties.description,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    //this._sp = getSP(this.context);
    return super.onInit();
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
