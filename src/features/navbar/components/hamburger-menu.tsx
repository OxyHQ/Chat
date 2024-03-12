"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSession } from "next-auth/react";

import {
  Avatar,
  FollowsLink,
  LinkToProfile,
  UserName,
  UserScreenName,
  useUser,
} from "@/features/profile";
import { useHamburger } from "@/stores/use-hamburger";

import { AdditionIcon } from "../assets/addition-icon";
import { Bookmark } from "../assets/bookmark-icon";
import { Gear } from "../assets/gear-icon";
import { User } from "../assets/user-icon";

import styles from "./styles/hamburger-menu.module.scss";

export const HamburgerMenu = () => {
  const closeHamburger = useHamburger((state) => state.closeHamburger);

  const { data: session } = useSession();
  const { data: user } = useUser({ id: session?.user?.id });

  return (
    <motion.div
      initial={{ x: `-100%` }}
      animate={{ x: `0%` }}
      exit={{ x: `-100%` }}
      transition={{ duration: 0.2 }}
      className={styles.container}
    >
      <div className={styles.profile}>
        <div aria-label="Account" className={styles.accounts}>
          <LinkToProfile
            onClick={() => {
              closeHamburger();
            }}
            username={user?.screen_name}
            tabIndex={-1}
          >
            <Avatar userImage={session?.user?.profile_image_url} />
          </LinkToProfile>

          <Link
            aria-label="Add account"
            href={`/auth/signin`}
            onClick={() => closeHamburger()}
            className={styles.addAccount}
          >
            <AdditionIcon />
          </Link>
        </div>

        <LinkToProfile
          username={user?.screen_name}
          onClick={() => {
            closeHamburger();
          }}
        >
          <UserName
            name={session?.user?.name}
            hover={true}
            isVerified={session?.user?.isVerified}
          />
        </LinkToProfile>

        <LinkToProfile
          username={session?.user?.screen_name}
          onClick={() => {
            closeHamburger();
          }}
          tabIndex={-1}
        >
          <UserScreenName screenName={user?.screen_name} />
        </LinkToProfile>

        {user && (
          <div className={styles.stats}>
            <FollowsLink
              stats={user?.following?.length}
              text="Following"
              link={`/${user?.screen_name}/following`}
              onClick={() => closeHamburger()}
            />

            <FollowsLink
              stats={user?.followers?.length}
              text="Followers"
              link={`/${user?.screen_name}/followers`}
              onClick={() => closeHamburger()}
            />
          </div>
        )}
      </div>

      <nav>
        <HamburgerLink
          title="Profile"
          path={user?.screen_name}
          icon={<User />}
          onclick={() => closeHamburger()}
        />
        <HamburgerLink
          title="Bookmarks"
          path={`bookmarks`}
          icon={<Bookmark />}
          onclick={() => closeHamburger()}
        />
        <HamburgerLink
          title="Settings"
          path={`settings`}
          icon={<Gear />}
          onclick={() => closeHamburger()}
        />
      </nav>
    </motion.div>
  );
};

const HamburgerLink = ({
  title,
  path,
  icon,
  onclick,
}: {
  title: string;
  path: string;
  icon: React.ReactNode;
  onclick: () => void;
}) => {
  return (
    <Link href={`/${path}`} onClick={onclick} className={styles.hamburgerLink}>
      {icon}
      {title}
    </Link>
  );
};
