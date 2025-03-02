import {DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {contact, SectionId} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';
import FacebookIcon from '../../Icon/FacebookIcon';
import GithubIcon from '../../Icon/GithubIcon';
import InstagramIcon from '../../Icon/InstagramIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import TwitterIcon from '../../Icon/TwitterIcon';
import Section from '../../Layout/Section';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: { Icon: EnvelopeIcon, srLabel: 'Email' },
  [ContactType.Phone]: { Icon: DevicePhoneMobileIcon, srLabel: 'Phone' },
  [ContactType.Location]: { Icon: MapPinIcon, srLabel: 'Location' },
  [ContactType.Github]: { Icon: GithubIcon, srLabel: 'Github' },
  [ContactType.LinkedIn]: { Icon: LinkedInIcon, srLabel: 'LinkedIn' },
  [ContactType.Facebook]: { Icon: FacebookIcon, srLabel: 'Facebook' },
  [ContactType.Twitter]: { Icon: TwitterIcon, srLabel: 'Twitter' },
  [ContactType.Instagram]: { Icon: InstagramIcon, srLabel: 'Instagram' },
};

const Contact: FC = memo(() => {
  const { headerText, description, items } = contact;

  return (
    <Section className="bg-white" sectionId={SectionId.Contact}>
      {/* Use grid with 1 column on mobile and 2 columns on larger screens */}
      <div key="contact-section" className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-14 py-8">
        {/* COLUMN 1: Icon + Heading (centered on mobile, right-aligned on desktop) */}
        <div className="flex flex-col items-center sm:items-end text-center sm:text-right space-y-4">
          <EnvelopeIcon className="h-16 w-16 text-gray-800" />
          <h2 className="text-2xl font-bold text-gray-800">{headerText}</h2>
        </div>

        {/* COLUMN 2: Description + Contact Items (centered on mobile, left-aligned on desktop) */}
        <div className="space-y-4 text-center sm:text-left">
          <p className="mb-4 prose leading-6 text-gray-800">{description}</p>
          <dl className="flex flex-col space-y-4 text-base text-gray-800 sm:space-y-2">
            {items.map(({type, text, href}) => {
              const {Icon, srLabel } = ContactValueMap[type];
              return (
                <div key={srLabel}>
                  <dt className="sr-only">{srLabel}</dt>
                  <dd className="flex items-center justify-center sm:justify-start">
                    <a
                      className={classNames(
                        '-m-2 flex rounded-md p-2 text-gray-800 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500',
                        {'hover:text-white': href}
                      )}
                      href={href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Icon
                        aria-hidden="true"
                        className="h-4 w-4 flex-shrink-0 text-gray-800 sm:h-5 sm:w-5"
                      />
                      <span className="ml-3 text-sm sm:text-base">{text}</span>
                    </a>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'About';
export default Contact;