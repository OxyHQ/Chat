"use client";
import { useSession } from "next-auth/react";

import { LoadingSpinner } from "@/components/elements/loading-spinner";
import { TryAgain } from "@/components/elements/try-again";
import { InfinitePosts, usePosts } from "@/features/posts";

import { BookmarksHeader } from "./bookmarks-header";
import { NoBookmarks } from "./no-bookmarks";
import styles from "./styles/bookmarks.module.scss";

export const Bookmarks = () => {
  const { data: session } = useSession();

  const {
    data: bookmarks,
    isLoading,
    isError,
    isSuccess,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = usePosts({
    queryKey: ["bookmarks", session?.user?.id],
    type: "bookmarks",
    id: session?.user?.id,
  });

  if (isLoading) {
    return (
      <>
        <BookmarksHeader
          hasBookmarks={false}
          username={session?.user?.username}
          userId={session?.user?.id}
        />
        <LoadingSpinner />
      </>
    );
  }

  if (isError) {
    return (
      <>
        <BookmarksHeader
          hasBookmarks={false}
          username={session?.user?.username}
          userId={session?.user?.id}
        />
        <TryAgain />
      </>
    );
  }

  return (
    <div className={styles.container}>
      <BookmarksHeader
        hasBookmarks={
          bookmarks ? bookmarks?.pages[0]?.posts?.length > 0 : false
        }
        username={session?.user?.username}
        userId={session?.user?.id}
      />

      {isSuccess && bookmarks?.pages[0]?.posts?.length === 0 ? (
        <NoBookmarks />
      ) : (
        <InfinitePosts
          posts={bookmarks}
          isFetchingNextPage={isFetchingNextPage}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isSuccess={isSuccess}
        />
      )}
    </div>
  );
};
