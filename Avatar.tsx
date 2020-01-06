import {Img} from 'components/media';
import {getModifiers} from 'components/libs';
import * as Types from 'components/types';
import React from 'react';
import './Avatar.scss';

type Status = 'online' | 'offline' | 'away';

export type AvatarProps = {
	href?: Types.Url;
	name: string;
	image?: Types.Image;
	size?: Types.Size;
	initials?: string;
	status?: Status;
};

export const Avatar = (props: AvatarProps) => {
	const base: string = 'avatar';

	const {name, image, size = '', initials, status, href} = props;

	const atts = {
		className: getModifiers(base, {
			size,
		}),
		title: name,
		href: href || undefined,
	};

	const presence = status ? <span role="status" className={`${base}__status ${status}`} aria-label="TODO" /> : null;

	const Component = href ? 'a' : 'span';

	if ((name || initials) && !image) {
		const label =
			initials ||
			name
				.replace(/([\[\]])/gi, '')
				.split(' ')
				.map(part => {
					return part
						.trim()
						.charAt(0)
						.toUpperCase();
				})
				.join('');

		return (
			<Component {...atts} data-initials={label}>
				{presence}
			</Component>
		);
	}

	if (!image) {
		return null;
	}

	return (
		<Component {...atts}>
			<span className={`${base}__image`}>
				<Img {...image} />
			</span>
			{presence}
		</Component>
	);
};
