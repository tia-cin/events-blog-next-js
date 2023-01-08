import React from "react";
import { Title } from "../components";

function AddEvent() {
  return (
    <div>
      <Title text="Add New Event" />
      <div>
        <form>
          <div>
            <input type="text" placeholder="Event Name" />
          </div>
          <div>
            <input type="text" placeholder="Event City" />
          </div>
          <div>
            <textarea placeholder="Event Description" />
          </div>
          <div>
            <input type="image" placeholder="Event Picture" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEvent;
