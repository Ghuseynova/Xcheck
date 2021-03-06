import React from 'react';
import { Field, FieldArray } from 'redux-form';
import { Input, Button, InputNumber, Select, Checkbox, Tooltip } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { required } from '../../../utils';
import { formItemLayout } from '../../forms/form-layout';
import makeField from '../../forms/make-field';

const { TextArea } = Input;
const { Option } = Select;

const AInput = makeField(Input, formItemLayout);
const AInputNumber = makeField(InputNumber, formItemLayout);
const ATextArea = makeField(TextArea, formItemLayout);
const ASelect = makeField(Select, formItemLayout);
const ACheckbox = makeField(Checkbox, formItemLayout);

const renderTaskItem = ({ fields }) => {
  return (
    <ul className="creationItemPosition">
      <li>
        <Tooltip title="Add criteria" color="blue" key="evaluation">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            className="addFieldArrayBtn"
            shape="circle"
            onClick={() => fields.push({})}
          />
        </Tooltip>
      </li>
      {fields.map((point, index) => (
        <li key={`${point}.title`}>
          <Button
            type="button"
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={() => fields.remove(index)}
            title="Remove item description"
          />

          <h4>item #{index + 1}</h4>
          <Field
            label="Title item"
            name={`${point}.title`}
            type="text"
            component={AInput}
            validate={[required]}
          />

          <Field
            label="Category"
            name={`${point}.category`}
            component={ASelect}
            validate={required}
            onBlur={(e) => e.preventDefault()}
          >
            <Option value="basic">Basic Scope</Option>
            <Option value="extra">Extra Scope</Option>
            <Option value="fines">Fines</Option>
          </Field>

          <Field
            label="Max score"
            name={`${point}.score`}
            min={0}
            max={1000}
            step={10}
            component={AInputNumber}
            validate={[required]}
            hasFeedback
          />

          <Field
            label="Description item"
            name={`${point}.description`}
            type="text"
            component={ATextArea}
          />

          <Field
            label="Only mentor check"
            name={`${point}.mentorCheck`}
            component={ACheckbox}
            type="checkbox"
            hasFeedback
          />
        </li>
      ))}
    </ul>
  );
};

const FieldArraysForm = () => {
  return <FieldArray name="items" component={renderTaskItem} />;
};

export default FieldArraysForm;
