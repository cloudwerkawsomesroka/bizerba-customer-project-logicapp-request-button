import { Link } from '@fluentui/react/lib/components/Link';
import Stack from '@fluentui/react/lib/components/Stack/Stack';
import * as React from 'react';

import styles from '../components/CustomerProjectsLogicAppRequestButton.module.scss';
import { IconButton } from '@fluentui/react';
import { stackItemStyles } from './CustomComponentStyle';
interface IRequestLinkModel {
    logicAppUrl: string,
    linkLabel: string,
    icon: string
}

const ActionLink: React.FC<IRequestLinkModel> = (props: IRequestLinkModel) => {
    const targetLink = props.logicAppUrl
    const label = props.linkLabel;

    return (
        /*
        <Stack enableScopedSelectors tokens={stackTokens}>
            <Stack.Item styles={stackItemStyles}>
                <AddCircle28Filled className={`${styles.icon}`} /><Link href={targetLink} target="_blank" className="links">{label}</Link>
            </Stack.Item>

        </Stack>*/
        <Stack horizontal={true}>
            <Stack.Item styles={stackItemStyles}>
                <IconButton
                    className={`${styles.icon}`}
                    iconProps={{
                        iconName: props.icon
                    }}
                />
            </Stack.Item>
            <Stack.Item align="center"><Link href={targetLink} target="_blank" className={`${styles.links}`}>{label}</Link></Stack.Item>
        </Stack>
    );

}

export default ActionLink;