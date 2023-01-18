import React from "react";
import Text from "../atoms/Text";
import Image from "next/image";
import {UserReviewListType} from "../organisms/UsersReview";
const UserReviewCard = ({review, imageProfile, userName, course}:UserReviewListType) => {
  return (
    <div className="w-full overflow-hidden bg-white h-[254px] border rounded-lg p-4 relative">
      <Text
        textStyle="Description"
        value={review}
      />
      <div className="absolute bottom-4 left-4 flex w-6/12 items-center ">
        <Image
          src={imageProfile}
          alt="Profile User"
          width={40}
          height={40}
        />
        <div className="ml-3">
          <Text textStyle="UserNameReview" value={userName} />
          <Text textStyle="UserClassReview" value={course} />
        </div>
      </div>
    </div>
  );
};

export default UserReviewCard;
