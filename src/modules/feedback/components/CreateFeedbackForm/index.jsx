import { Button, Input } from "antd";
import React, { useState } from "react";

const CreateFeedbackForm = () => {
  const [isCreating, setIsCreating] = useState(false);
  return (
    <div>
      <div className="relative space-y-2">
        <Input placeholder="Tạo feedback" onClick={() => setIsCreating(true)} />
        {isCreating && (
          <div className="absolute left-0 right-0 flex justify-end space-x-2 top-full">
            <Button type="primary" onClick={() => setIsCreating(false)}>
              Huỷ
            </Button>
            <Button type="primary">Thêm</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateFeedbackForm;
