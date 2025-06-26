import { departureDateData } from "@/database/packageDb";
import { Button } from "@heroui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";

const DepartureDateTable = () => {
  return (
    <div>
      <Table radius="sm" className="shadow-2xl">
        <TableHeader>
          <TableColumn>Trip Name</TableColumn>
          <TableColumn>Departure Dates</TableColumn>
          <TableColumn>Price</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody>
          {departureDateData.map((list) => {
            return (
              <TableRow key={list.id}>
                <TableCell className="text-primary">{list.tripName}</TableCell>
                <TableCell className="text-muted">{list.date}</TableCell>
                <TableCell className="text-muted">
                  US$ {list.price} /- pp
                </TableCell>
                <TableCell>
                  <Button color="primary" radius="sm" size="sm">
                    Join Now
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default DepartureDateTable;
