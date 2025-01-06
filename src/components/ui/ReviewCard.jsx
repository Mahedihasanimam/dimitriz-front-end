import { imageUrl } from "@/redux/baseApi";
import { Card, Rate, Avatar } from "antd";

const ReviewCard = ({ review }) => {
  console.log(review);
  return (
    <div>
      <Card className="shadow-lg min-h-[300px] w-full rounded-lg  ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 justify-start">
            {
              review?.user?.image && <Avatar src={imageUrl + review?.user?.image} size={48} />
            }
            
            <div>
              <h3 className="font-bold text-[16px] text-[#1D2939]">
                {review.name}
              </h3>
              <Rate
                className="text-[#FDB022] no-gap-stars"
                disabled
                defaultValue={review?.rating}
              />
            </div>
          </div>
          <p className="text-[#667085]  text-sm font-medium mt-2">
            {new Date (review?.createdAt).toDateString()}
          </p>
        </div>
        <p className="mt-2 text-gray-700">{review?.review}</p>
      </Card>
    </div>
  );
};

export default ReviewCard;
