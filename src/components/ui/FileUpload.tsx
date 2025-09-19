import { useRef, useState } from 'react';
import { clsx } from 'clsx';
import { Upload, File, X, Check } from 'lucide-react';
import type { BaseComponentProps } from '@/types';

interface FileUploadProps extends BaseComponentProps {
  accept?: string;
  maxSize?: number; // in MB
  onFileSelect?: (file: File) => void;
  onFileRemove?: () => void;
  disabled?: boolean;
  multiple?: boolean;
  placeholder?: string;
  error?: string;
}

const FileUpload = ({
  className,
  accept = '.pdf,.doc,.docx',
  maxSize = 10,
  onFileSelect,
  onFileRemove,
  disabled = false,
  multiple = false,
  placeholder = 'Arrastra tu archivo aquí o haz clic para seleccionar',
  error,
  ...props
}: FileUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (disabled) return;

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    const files = e.target.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    setUploadError(null);

    // Validar tipo de archivo
    const acceptedTypes = accept.split(',').map(type => type.trim());
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    
    if (!acceptedTypes.includes(fileExtension)) {
      setUploadError(`Tipo de archivo no válido. Aceptados: ${accept}`);
      return;
    }

    // Validar tamaño
    if (file.size > maxSize * 1024 * 1024) {
      setUploadError(`El archivo es demasiado grande. Máximo: ${maxSize}MB`);
      return;
    }

    setUploadedFile(file);
    onFileSelect?.(file);
  };

  const handleRemove = () => {
    setUploadedFile(null);
    setUploadError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onFileRemove?.();
  };

  const handleClick = () => {
    if (!disabled) {
      fileInputRef.current?.click();
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className={clsx('w-full', className)} {...props}>
      <div
        className={clsx(
          'relative border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200 cursor-pointer',
          dragActive
            ? 'border-primary-500 bg-primary-500/10'
            : 'border-dark-600 hover:border-primary-500/50',
          disabled
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:bg-dark-800/50',
          error || uploadError
            ? 'border-red-500 bg-red-500/10'
            : ''
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileInput}
          className="hidden"
          disabled={disabled}
        />

        {uploadedFile ? (
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <File className="w-8 h-8 text-primary-400" />
              <div className="text-left">
                <p className="text-dark-100 font-medium">{uploadedFile.name}</p>
                <p className="text-sm text-dark-400">
                  {formatFileSize(uploadedFile.size)}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove();
                }}
                className="p-1 hover:bg-red-500/20 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-red-400" />
              </button>
            </div>
            <div className="flex items-center justify-center space-x-1 text-green-400">
              <Check className="w-4 h-4" />
              <span className="text-sm">Archivo cargado correctamente</span>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <Upload className="w-12 h-12 text-dark-400 mx-auto" />
            <div>
              <p className="text-dark-200 font-medium">{placeholder}</p>
              <p className="text-sm text-dark-400">
                Formatos aceptados: {accept} • Máximo: {maxSize}MB
              </p>
            </div>
          </div>
        )}
      </div>

      {(error || uploadError) && (
        <p className="mt-2 text-sm text-red-400">
          {error || uploadError}
        </p>
      )}
    </div>
  );
};

export default FileUpload;
