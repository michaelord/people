import {Text} from 'components/editable';
import {getModifiers} from 'components/libs';
import * as Types from 'components/types';
import React from 'react';
import {Avatar, AvatarProps} from './';
import './Author.scss';

export type AuthorProps = AvatarProps & {
	additional?: string;
	hasAvatar?: Types.TrueFalse;
};

export const Author = (props: AuthorProps) => {
	const base: string = 'author';

	const {additional, href, hasAvatar = true, ...rest} = props;
	const {name} = props;

	const atts = {className: getModifiers(base, {})};

	return (
		<div {...atts}>
			<div className={`${base}__main`}>
				{hasAvatar && <Avatar {...rest} href={href} />}
				<div className={`${base}__detail`}>
					{href ? (
						<a href={href} className={`${base}__name`}>
							<Text content={name} />
						</a>
					) : (
						<Text content={name} className={`${base}__name`} />
					)}

					<Text content={additional} className={`${base}__role`} />
				</div>
			</div>
		</div>
	);
};
