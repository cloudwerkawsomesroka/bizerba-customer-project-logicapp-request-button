import * as React from 'react';
import styles from './CustomerProjectsLogicAppRequestButton.module.scss';
import { ICustomerProjectsLogicAppRequestButtonProps } from './CustomerProjectsLogicAppRequestButtonProps';
import * as strings from 'CustomerProjectsLogicAppRequestButtonWebPartStrings';
import ActionLink from '../custom/ActionLink';

const CustomerProjectsLogicAppRequestButton: React.FC<ICustomerProjectsLogicAppRequestButtonProps> = (props) => {

  return (
    <section className={`${styles.customerProjectsLogicAppRequestButton}`}>
      <div>
        <h3>{strings.CustomerProjectsLogicAppWebPartHeader}</h3>
          <ActionLink logicAppUrl="#" linkLabel={strings.InternalMOActionLabel} icon="ReportLibrary"/>
          <ActionLink logicAppUrl="#" linkLabel={strings.InternalPOActionLabel} icon="ReportLibrary"/>
          <ActionLink logicAppUrl="#" linkLabel={strings.SoftwareprojekteActionLabel} icon="FormLibrary"/>
          <ActionLink logicAppUrl="#" linkLabel={strings.ProjectTeamActionLabel} icon="NewTeamProject"/>
          <ActionLink logicAppUrl="#" linkLabel={strings.PicturesActionLabel} icon="PictureLibrary"/>
      </div>
    </section>
  );
}
export default CustomerProjectsLogicAppRequestButton;
