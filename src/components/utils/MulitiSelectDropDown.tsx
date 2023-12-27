import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

interface Option {
  id: number;
  label: string;
}

export const MultiSelectDropdown: React.FC = () => {
  const [showDropdownList, setShowDropDownList] = useState(false);
  const [selectedItemsList, setSelectedItemsList] = useState<Option[]>([]);
  const options: Option[] = [
    {
      id: 1,
      label: 'one',
    },
    {
      id: 2,
      label: 'two',
    },
  ];

  const [renderedOptions, setRenderedOptions] = useState<Option[]>(options);
  const hanldeDropDownClick = () => {
    setShowDropDownList(!showDropdownList);
  };

  const handleOptionSelected = (optionLabel: Option) => {
    setSelectedItemsList((prev) => [...prev, optionLabel]);
    setRenderedOptions(
      renderedOptions.filter((opt) => opt.id !== optionLabel.id)
    );
  };

  const hanldeSelectedOptionClose = (optionLabel: Option) => {
    setSelectedItemsList(
      selectedItemsList.filter((opt) => opt.id !== optionLabel.id)
    );
    setRenderedOptions((prev) => [...prev, optionLabel]);
  };

  const hanldeOptionListItemClose = (optionLabel: Option) => {
    // Need to add a condition to stop delte if the tag is being used somewhere
    // const foundTags =
    const results = options.filter((opt) => opt.id !== optionLabel.id);
    setRenderedOptions(results);
  };
  return (
    <div className="h-10 w-100">
      <div
        onClick={hanldeDropDownClick}
        className="selecte-list h-100 w-100 d-flex border"
        style={{ minWidth: '100%', minHeight: '40px' }}
      >
        {selectedItemsList.length > 0 &&
          selectedItemsList.map((item) => {
            return (
              <div
                className="d-flex p-1 border border-primary m-1 rounded"
                key={`selected-${item.id}`}
              >
                {item.label}
                <CloseIcon
                  className="sx"
                  onClick={() => hanldeSelectedOptionClose(item)}
                />
              </div>
            );
          })}
      </div>
      <div>
        <div>
          {showDropdownList &&
            renderedOptions.map((op) => {
              return (
                <div className="d-flex">
                  <div
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleOptionSelected(op)}
                    key={op.id}
                  >
                    {op.label}{' '}
                  </div>
                  <CloseIcon
                    className="sx"
                    onClick={() => hanldeOptionListItemClose(op)}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
