import { Link } from "react-router-dom";
import Table from "../utils/Table";
import { FolderT } from "../../common/types";
import editSquare from "../../common/img/icons/edit-square.svg";
import deleteIcon from "../../common/img/icons/delete.svg";

function FoldersTable(props: any) {
  /* TODO add good type */
  let {
    folders,
    deleteAction,
  }: { folders: FolderT[]; deleteAction: (id: number) => void } = props;
  const fetchAction = () => {
    console.log("fetchAction");
  };

  console.log("folders", folders);

  return (
    <div className="mt-4">
      <Table fetchAction={fetchAction}>
        <table className="w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>Studied/Count</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {folders.map(
              ({
                id,
                title,
                created,
              }: {
                id: number;
                title: string;
                created: string;
              }) => (
                <tr key={id}>
                  <td>
                    <Link
                      state={{ id, title, created }}
                      style={{ textDecoration: "none" }}
                      to={{ pathname: `/folder/${id}` }}
                    >
                      {title}
                    </Link>
                  </td>
                  <td className="text-center">
                    ? {/* TODO - receive from backend studied and count */}
                  </td>
                  <td>
                    <Link
                      state={{ id, title }}
                      style={{ textDecoration: "none" }}
                      to={{ pathname: `/folder/${id}/edit` }}
                    >
                      <img
                        alt="edit"
                        className="w-8 mx-auto"
                        src={editSquare}
                      />
                    </Link>
                  </td>
                  {/* TODO ADD cancel effect / or confirm for start */}
                  <td>
                    <img
                      alt="delete"
                      className="w-8 mx-auto cursor-pointer"
                      src={deleteIcon}
                      onClick={() => {
                        deleteAction(id);
                      }}
                    />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </Table>
    </div>
  );
}

export default FoldersTable;
