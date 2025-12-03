import { NextRequest, NextResponse } from "next/server"
import { writeFile, mkdir } from "fs/promises"
import path from "path"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const files = formData.getAll("files") as File[]
    const targetFolder = formData.get("targetFolder") as string

    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: "No files provided" },
        { status: 400 }
      )
    }

    if (targetFolder !== "public" && targetFolder !== "assets") {
      return NextResponse.json(
        { error: "Invalid target folder" },
        { status: 400 }
      )
    }

    const uploadedFiles: string[] = []

    for (const file of files) {
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      // Determine target directory
      let targetDir: string
      if (targetFolder === "public") {
        targetDir = path.join(process.cwd(), "public")
      } else {
        targetDir = path.join(process.cwd(), "src", "assets", "images")
      }

      // Ensure directory exists
      await mkdir(targetDir, { recursive: true })

      // Save file
      const filePath = path.join(targetDir, file.name)
      await writeFile(filePath, buffer)
      uploadedFiles.push(file.name)
    }

    return NextResponse.json({
      success: true,
      files: uploadedFiles,
      location: targetFolder === "public" ? "/public" : "/src/assets/images",
    })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json(
      { error: "Failed to upload files" },
      { status: 500 }
    )
  }
}
