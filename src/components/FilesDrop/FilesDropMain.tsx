import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Icon } from "@iconify/react";
import CloseIcon from "@mui/icons-material/Close";

interface FilesDrop {
  onChooseImage: (value: any) => void;
}

const FilesDrop = ({ onChooseImage }: FilesDrop) => {
  const [files, setFiles] = useState<(any & { preview: string })[]>([]);

  useEffect(() => {
    files.map((file) => {
      onChooseImage(file.preview);
    });
  }, [files, onChooseImage]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    // maxFiles: 1,
  });

  const onRemoveFile = (file: string) => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
  };

  const removeAll = () => {
    setFiles([]);
  };

  const thumbs = files?.map((file) => {
    return (
      <Box
        sx={{
          display: "inline-flex",
          borderRadius: 2,
          border: "1px solid #eaeaea",
          marginBottom: 0,
          marginRight: 0,
          width: "80px",
          height: "80px",
          padding: 0,
          boxSizing: "border-box",
          position: "relative",
        }}
        key={file.name}
      >
        <Box sx={{ display: "flex", minWidth: 0, overflow: "hidden" }}>
          <img
            src={file.preview}
            style={{ display: "block", width: "auto", height: "100%" }}
            // Revoke data uri after image is loaded
            // onLoad={() => {
            //   URL.revokeObjectURL(file.preview);
            // }}
          />
        </Box>

        <button
          style={{
            borderRadius: "1000px",
            border: "none",
            backgroundColor: "#F4F6F8",
            width: "15px",
            height: "15px",
            cursor: "pointer",
            position: "absolute",
            top: "3px",
            right: "3px",
          }}
          onClick={() => onRemoveFile(file)}
        >
          <CloseIcon sx={{ width: "15px", height: "15px" }} />
        </button>
      </Box>
    );
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files?.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <section style={{ width: "100%" }}>
      <Box
        sx={{
          border: "1px solid #F4F6F8",
          borderRadius: "16px",
          padding: "10px",
          marginTop: "20px",
        }}
        {...getRootProps({ className: "dropzone" })}
      >
        <input {...getInputProps()} />
        <Box
          sx={{
            width: "100%",
            height: "221px",
            backgroundColor: "#F3F5F6",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "16px",
          }}
        >
          <Icon
            icon="iconamoon:folder-add-light"
            color="#121212"
            style={{
              border: "none",
              borderRadius: "1000px",
              width: "40px",
              height: "40px",
              cursor: "pointer",
              backgroundColor: "#E4E6EB",
              padding: "5px",
            }}
          />
          <Typography
            sx={{ color: "#121212", fontWeight: 600, fontSize: "17px" }}
          >
            Thêm ảnh/video
          </Typography>
          <Typography
            sx={{ color: "#94999C", fontWeight: 400, fontSize: "12px" }}
          >
            hoặc kéo và thả
          </Typography>
        </Box>
      </Box>

      {files.length > 0 && (
        <Box sx={{ position: "relative" }}>
          <aside
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              marginTop: 16,
            }}
          >
            {thumbs}
          </aside>
          <Button
            sx={{
              border: "none",
              borderRadius: "16px",
              padding: "3px 10px",
              color: "#121212",
              backgroundColor: "#E8ECEE",
              fontSize: "12px",
              position: "absolute",
              bottom: "5px",
              right: "5px",
            }}
            onClick={removeAll}
          >
            Remove All
          </Button>
        </Box>
      )}
    </section>
  );
};

export default FilesDrop;
