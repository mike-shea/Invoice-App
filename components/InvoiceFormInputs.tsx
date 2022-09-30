import React from 'react';
import FieldSet from './FieldSet';
import TextInput from './TextInput';
import DateInput from './DateInput';
import InvoiceFormItemElement from './InvoiceFormItemElement';

import { ClientInfo, Details, Items, UserInfo } from '../types/InputFormTypes';

export default function InvoiceFormInputs({
  userInfo,
  clientInfo,
  details,
  items
}: {
  userInfo: UserInfo;
  clientInfo: ClientInfo;
  details: Details;
  items: Items;
}) {
  return (
    <form>
      <FieldSet legendLabel="Sender">
        <TextInput
          state={userInfo.state.street}
          setState={userInfo.setState.setStreet}
          label="Street Address"
        />
        <div className="grid w-full grid-cols-2 gap-x-4 lg:grid-cols-3">
          <TextInput
            state={userInfo.state.city}
            setState={userInfo.setState.setCity}
            label="City"
          />
          <TextInput
            state={userInfo.state.postalCode}
            setState={userInfo.setState.setPostalCode}
            label="Postal Code"
          />
          <TextInput
            state={userInfo.state.country}
            setState={userInfo.setState.setCountry}
            label="Country"
          />
        </div>
      </FieldSet>
      <FieldSet legendLabel="Bill To">
        <TextInput
          state={clientInfo.state.clientName}
          setState={clientInfo.setState.setClientName}
          label="Client's Name"
        />
        <TextInput
          state={clientInfo.state.clientEmail}
          setState={clientInfo.setState.setClientEmail}
          label="Client's Email"
        />
        <TextInput
          state={clientInfo.state.clientStreet}
          setState={clientInfo.setState.setClientStreet}
          label="Street Address"
        />
        <div className="grid w-full grid-cols-2 gap-x-4 lg:grid-cols-3">
          <TextInput
            state={clientInfo.state.clientCity}
            setState={clientInfo.setState.setClientCity}
            label="City"
          />
          <TextInput
            state={clientInfo.state.clientPostalCode}
            setState={clientInfo.setState.setClientPostalCode}
            label="Postal Code"
          />
          <TextInput
            state={clientInfo.state.clientCountry}
            setState={clientInfo.setState.setClientCountry}
            label="Country"
          />
        </div>
      </FieldSet>
      <FieldSet legendLabel="Details">
        <DateInput {...details} />
      </FieldSet>
      <FieldSet legendLabel="Items to Add">
        <ul className="flex flex-col gap-y-8 ">
          {items.state.map((item) => {
            return (
              <InvoiceFormItemElement
                itemCounter={items.state}
                setItemCounter={items.setState}
                key={item.id}
                id={item.id}
              />
            );
          })}
        </ul>
      </FieldSet>
    </form>
  );
}
