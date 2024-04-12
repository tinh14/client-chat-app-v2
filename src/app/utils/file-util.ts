
export class FileUtil {
    

  // static getURL(fileCode: string) {
  //   return `http://localhost:4200/api/v2/files/${fileCode}?${Date.now()}`;
  // }

  static getURL(fileCode: string) {
    return `http://localhost:4200/api/v2/files/inline/${fileCode}`;
  }

  static getAttachment(fileCode: string) {
    return `http://localhost:4200/api/v2/files/attachment/${fileCode}`;
  }

  //   static getBase64FromBinary(data: string, contentType: string): string {
  //     return "data:" + contentType + ";base64," + data;
  //   }

  // static async getFileDataWithReader(file: File): Promise<FileDataModel> {
  //   return new Promise<FileDataModel>((resolve, reject) => {
  //     const fileData: FileDataModel = new FileDataModel();
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //      fileData.data = e.target.result.toString().split(',')[1];
  //      fileData.contentType = file.type;
  //      fileData.extension = file.name.split('.').pop();
  //      resolve(fileData);
  //     };
  //     reader.onerror = (e) => {
  //      reject(e);
  //     };
  //     reader.readAsDataURL(file);
  //   });
  //  }

    static getType(file: File): string {
      const fileType = file.type;

      const typeMap: { [key: string]: string[] } = {
        'AUDIO': ['audio/mpeg', 'audio/mp3'],
        'VIDEO': ['video/mp4', 'video/mpeg'],
        'IMAGE': ['image/jpeg', 'image/png', 'image/gif'],
        'DOCUMENT': [
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'application/msword',
        ],
        'PDF': [
          'application/pdf',
        ],
        'SHEET': [
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        ],
        'PRESENTATION': [
          'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        ]
      };
    
      for (const type in typeMap) {
        if (typeMap[type].includes(fileType)) {
          return type;
        }
      }
    
      return 'OTHER';
    }

}