import React from 'react';
import {Avatar, AvatarProps} from './Avatar';
import './AvatarGroup.scss';

import * as Types from 'components/types';

export type AvatarGroupProps = {
	items?: Array<AvatarProps>;
};

export const AvatarGroup = (props: AvatarGroupProps) => {
	const base: string = 'avatar-group';

	const {items} = props;

	if (!items || (items && items.length === 0)) {
		return null;
	}

	return (
		<div className={base}>
			{items.map((item, index) => (
				<Avatar {...item} key={`avatar-${index}`} />
			))}
		</div>
	);
};
