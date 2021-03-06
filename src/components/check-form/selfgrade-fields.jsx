/* eslint-disable react/prop-types */
import React from 'react';
import SelfGradeField from './selfgrade-field';

const SelfGradeFields = (props) => {
  const { fields, detailIds, commentFieldIds, toggleMore, toggleAdd } = props;
  return (
    <>
      {fields.map((field) => {
        return (
          <SelfGradeField
            key={field.id}
            {...field}
            detailIds={detailIds}
            commentFieldIds={commentFieldIds}
            toggleMore={toggleMore}
            toggleAdd={toggleAdd}
          />
        );
      })}
    </>
  );
};

export default SelfGradeFields;
